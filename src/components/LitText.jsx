// Text that lights up gold under the cursor (the site's signature). The plain layer stays readable
// without a pointer; the glow layer is masked by the --lx/--ly variables that useDiyaLight updates.
// The wrapper keeps its identity across text changes (the light hook holds a reference to it);
// the keyed spans replay the entrance animation when the words change.
export default function LitText({ children, targetRef, className = '' }) {
  const key = String(children);
  return (
    <span className={`lit ${className}`} ref={targetRef}>
      <span key={key} className="lit__base">
        {children}
      </span>
      <span key={`glow-${key}`} className="lit__glow" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
