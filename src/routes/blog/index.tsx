import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/blog/")({ component: () => <div className="p-20 font-serif text-4xl text-center">Blog & Insights</div> });
