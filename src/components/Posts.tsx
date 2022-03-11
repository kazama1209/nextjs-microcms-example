import Link from "next/link";
import Image from "next/image";

import { Post } from "types";

type PostsProps = {
  posts: Post[];
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts?.map(({ id, title, subTitle, thumbnail, categories }) => {
        return (
          <div key={id} className="my-5 flex justify-center cursor-pointer">
            <Link href="/blog/[id]" as={`/blog/${id}`} passHref>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                  src={thumbnail.url}
                  width={640}
                  height={480}
                  alt="thumbnail image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{subTitle}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {categories?.map(({ id, name }) => {
                    return (
                      <span
                        key={id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;