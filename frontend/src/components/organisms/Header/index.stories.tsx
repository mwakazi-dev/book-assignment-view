import { Meta, StoryObj } from "@storybook/react/*";

import Header from ".";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    onAddBook: { action: "onAddBook" },
    addLoading: { control: { type: "boolean" } },
    books: {
      control: {
        type: "object",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    books: [
      {
        id: 1,
        title: "Book title 1",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        id: 2,
        title: "Book title 2",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
      {
        id: 3,
        title: "Book title 3",
        coverPhotoURL: "https://picsum.photos/200/300",
        author: "Author name",
      },
    ],
  },
};

export default meta;
