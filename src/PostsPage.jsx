import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  const posts = [
    {
      id: 1,
      title: 'Hello',
      body: 'welcome to the blog',
      image: 'https://cdn.pixabay.com/photo/2015/03/17/02/01/cubes-677092_1280.png',
    },
    {
      id: 2,
      title: 'Hello',
      body: 'welcome to the blog',
      image: 'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg',
    }
  ];
  return (
    <div>
      <PostsIndex posts={posts} />
      <PostsNew />
    </div>
  );
}
