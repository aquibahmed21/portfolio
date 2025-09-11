import React, { useState, useEffect, useRef, useMemo } from 'react';

const TypingAnimation: React.FC = () => {
  const roles = useMemo(() => ['Frontend Developer', 'React Expert', 'UI/UX Enthusiast'], []);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleTyping() {
      const fullText = roles[loopIndex];
      setCurrentRole((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentRole === fullText) {
        setIsDeleting(true);
        setTypingSpeed(100);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(200);
      }
    }

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentRole, isDeleting, typingSpeed, loopIndex, roles]);

  return (
    <>
      I'm a <span className="text-blue-500">{currentRole}</span>
      <span className="animate-blink">|</span>
    </>
  );
};

export default TypingAnimation;
