import { forwardRef } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';

// Router links that use the View Transitions API where the browser supports it
// (a soft cross-fade between pages), and behave as normal links elsewhere.
export const Link = forwardRef(function Link(props, ref) {
  return <RouterLink ref={ref} viewTransition {...props} />;
});

export const NavLink = forwardRef(function NavLink(props, ref) {
  return <RouterNavLink ref={ref} viewTransition {...props} />;
});
