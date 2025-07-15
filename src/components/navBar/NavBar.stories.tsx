// src/components/NavBar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./index";
import { Home, User, Settings } from "lucide-react";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof NavBar> = {
  title: "Componentes/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    titulo: "OstomyCare",
    iconeLogo: "/icons/logo.svg",
    icone: Home,
    listaNav: [
      { nome: "Home", icone: Home, path: "/" },
      { nome: "Perfil", icone: User, path: "/perfil" },
      { nome: "Configurações", icone: Settings, path: "/config" },
    ],
  },
};
