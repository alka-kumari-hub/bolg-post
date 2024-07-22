import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BlogPostDetails from "./BlogPostDetails";

const mockPosts = [
  {
    title: "This Ancient Technology Is Helping Millions Stay Cool",
    content:
      "CBalance is another company working to tackle the heat problem...",
    urlToImage: "https://example.com/image.jpg",
  },
];

test("renders blog post details", async () => {
  await (async () => {
    render(
      <MemoryRouter initialEntries={["/post/0"]}>
        <Routes>
          <Route
            path="/post/:id"
            element={<BlogPostDetails posts={mockPosts} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });

  // Check if the title is rendered
  expect(
    screen.getByText("This Ancient Technology Is Helping Millions Stay Cool")
  ).toBeInTheDocument();

  // Check if the content is rendered
  expect(
    screen.getByText(
      "CBalance is another company working to tackle the heat problem..."
    )
  ).toBeInTheDocument();

  // Check if the image is rendered
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  expect(img).toHaveAttribute(
    "alt",
    "This Ancient Technology Is Helping Millions Stay Cool"
  );

  // Check if the back button is rendered
  expect(screen.getByRole("button", { name: /back/i })).toBeInTheDocument();
});
