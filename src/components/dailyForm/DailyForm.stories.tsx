// src/components/DailyForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DailyForm from "./index";

const meta: Meta<typeof DailyForm> = {
  title: "Componentes/DailyForm",
  component: DailyForm,
};

export default meta;

type Story = StoryObj<typeof DailyForm>;

export const Default: Story = {};
