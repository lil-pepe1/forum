interface Props {
  title: string;
  author: string;
}

function Post({ title, author }: Props) {
  return (
    <>
      <td className="main__table-data">
        <div className="main__post-title">
          <a className="main__post-link" href="">
            {title}
          </a>
        </div>
        <div className="main__post-info">
          <div className="main__post-author">
            By
            <a className="main__post-author-link" href="">
              {author}
            </a>
          </div>
          <div className="main__post-time"></div>
        </div>
      </td>
    </>
  );
}

export default Post;
