// src/components/DailyHistory.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import DailyHistory from "./index";

const meta: Meta<typeof DailyHistory> = {
  title: "Componentes/DailyHistory",
  component: DailyHistory,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "620px", margin: "2rem auto" }}>
        <Story />
      </div>
    ),]
};

export default meta;

type Story = StoryObj<typeof DailyHistory>;

export const Default: Story = {};
