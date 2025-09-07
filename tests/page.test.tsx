import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("renderiza lista inicial de tarefas", async () => {
  render(await Page());
  expect(screen.getByText("Estudar Next.js 15")).toBeInTheDocument();
});
