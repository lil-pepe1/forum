import "./Post";
import Post from "./Post";

interface Props {
  name: string;
  id: string;
}

function Topic({ name, id }: Props) {
  return (
    <>
      <div id={id} className="main__container">
        <section className="main__card">
          <h2 className="main__title">{name}</h2>
          <table className="main__table">
            <tbody className="main__table-body">
              <tr className="main__table-row">
                <Post title="1" author="user1"></Post>
                <Post title="2" author="user2"></Post>
              </tr>
              <tr className="main__table-row">
                <Post title="3" author="user3"></Post>
                <Post title="4" author="user4"></Post>
              </tr>
              <tr className="main__table-row">
                <Post title="5" author="user5"></Post>
                <Post title="6" author="user6"></Post>
              </tr>
              <tr className="main__table-row">
                <Post title="7" author="user7"></Post>
                <Post title="8" author="user8"></Post>
              </tr>
              <tr className="main__table-row">
                <Post title="9" author="user9"></Post>
                <Post title="10" author="user10"></Post>
              </tr>
              <tr className="main__table-row">
                <Post title="11" author="user11"></Post>
                <Post title="12" author="user12"></Post>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Topic;
