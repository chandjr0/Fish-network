import { useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const previous = useRef(pathname);
  const shouldEnter = previous.current !== pathname;

  useEffect(() => {
    previous.current = pathname;
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={shouldEnter ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.16, 0.8, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function RouteProgress() {
  const pending = useRouterState({ select: (state) => state.status === "pending" });

  return (
    <div
      aria-hidden="true"
      className={pending ? "route-progress is-loading" : "route-progress"}
    />
  );
}
