import React, { useState, useEffect, useMemo } from 'react';

const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

type Phase = 'typing' | 'deleting';

const TypingAnimation: React.FC = () => {
  const roles = useMemo(() => ['Frontend Developer', 'React Expert', 'UI/UX Enthusiast'], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');

  useEffect(() => {
    const fullText = roles[roleIndex];

    if (phase === 'typing') {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => setText(fullText.slice(0, text.length + 1)), TYPING_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPING);
      return () => clearTimeout(timeout);
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const timeout = setTimeout(() => setText(text.slice(0, -1)), DELETING_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase('typing');
      }, PAUSE_AFTER_DELETING);
      return () => clearTimeout(timeout);
    }
  }, [text, phase, roleIndex, roles]);

  return (
    <>
      I'm a <span className="text-blue-500">{text}</span>
      <span className="animate-blink">|</span>
    </>
  );
};

export default TypingAnimation;
