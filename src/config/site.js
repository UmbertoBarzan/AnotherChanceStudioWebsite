export function constructMetadata({
  title = "AnotherChanceStudio",
  description = "AnotherChanceStudio - European XR studio for immersive training, industrial simulation and live events.",
  image = "/media/brand/share.png",
  icons = {
    icon: [{ url: "/favicon.svg?v=nh2", type: "image/svg+xml" }],
    shortcut: "/favicon.svg?v=nh2",
  },
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://anotherchancestudio.com/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
