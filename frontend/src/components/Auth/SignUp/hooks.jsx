import { useState, useCallback } from 'react';

export default function Hooks(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(prev => !prev), []);
  return [on, toggle];
}
