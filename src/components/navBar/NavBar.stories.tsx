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
      { nome: "Início", icone: Home, path: "/" },
      { nome: "Biblioteca", icone: User, path: "/perfil" },
      { nome: "Produtos", icone: User, path: "/perfil" },
      { nome: "Monitoramento", icone: User, path: "/icons/" },
      { nome: "Diário", icone: User, path: "/icons;" },
      { nome: "Especialistas", icone: Settings, path: "/config" },
      { nome: "Login", icone: Settings, path: "/config" },
    ],
  },
};
