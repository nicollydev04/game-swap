import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { ExplorePage } from "../features/explore/pages/ExplorePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [{ index: true, element: <ExplorePage /> }],
  },
]);
