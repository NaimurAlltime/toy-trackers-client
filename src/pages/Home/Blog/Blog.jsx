const Blog = () => {
  return (
    <div className="mt-5 md:mx-24">
      <div className="w-3/5">
        <p className="text-2xl">
          <span className="text-2xl font-semibold">Question-1:</span> What is an
          access token and refresh token? How do they work and where should we
          store them on the client-side?
        </p>
        <p className="text-justify">
          <span className="text-2xl font-semibold">Answer: </span>
          A refresh token just helps you re-validate a user without them having
          to re-enter their login credentials multiple times. The access token
          is re-issued, provided the refresh token is a valid one requesting
          permission to access confidential resources.
          <br />
          Client-side storage works on similar principles, but has different
          uses. It consists of JavaScript APIs that allow you to store data on
          the client (i.e. on the user is machine) and then retrieve it when
          needed. This has many distinct uses, such as:
          <ul className="list-disc">
            <li>
              Personalizing site preferences (e.g. showing a user is choice of
              custom widgets, color scheme, or font size).
            </li>
            <li>
              Persisting previous site activity (e.g. storing the contents of a
              shopping cart from a previous session, remembering if a user was
              previously logged in).
            </li>
            <li>
              Saving data and assets locally so a site will be quicker (and
              potentially less expensive) to download, or be usable without a
              network connection.
            </li>
            <li>
              Saving web application generated documents locally for use offline
            </li>
          </ul>
        </p>
      </div>
      <div className="mt-5 w-3/5">
        <p className="text-2xl">
          <span className="text-2xl font-semibold">Question-2: </span> Compare
          SQL and NoSQL databases?
        </p>
        <p className="text-justify">
          <span className="text-2xl font-semibold">Answer: </span> SQL databases
          are vertically scalable, while NoSQL databases are horizontally
          scalable. SQL databases are table-based, while NoSQL databases are
          document, key-value, graph, or wide-column stores. SQL databases are
          better for multi-row transactions, while NoSQL is better for
          unstructured data like documents or JSON.
        </p>
      </div>
      <div className="mt-5 w-3/5">
        <p className="text-2xl">
          <span className="text-2xl font-semibold">Question-3:</span> What is
          express js? What is Nest JS?
        </p>
        <p className="text-justify">
          <span className="text-2xl font-semibold">Answer: </span>
          Express is a minimalist and flexible framework that is easy to use and
          has a large community of developers.
          <br />
          NestJS, on the other hand, is a newer framework that provides
          additional features such as dependency injection, a modular
          architecture, and an intuitive CLI.
        </p>
      </div>
      <div className="mt-5 w-3/5">
        <p className="text-2xl">
          <span className="text-2xl font-semibold">Question-4: </span> What is
          MongoDB aggregate and how does it work?
        </p>
        <p className="text-justify">
          <span className="text-2xl font-semibold">Answer: </span> When you need
          to do more complex aggregation, you can use the MongoDB aggregation
          pipeline (here is a more detailed tutorial). Aggregation pipelines are
          collections of stages that, combined with the MongoDB query syntax,
          will allow you to obtain an aggregated result. Before we dive into the
          code, let is understand what the aggregation pipeline itself does and
          how it works. In the aggregation pipeline, you list out a series of
          instructions in a stage. For each stage that is defined, MongoDB
          executes them one after another in order to give a finalized output
          you are able to use.
        </p>
      </div>
    </div>
  );
};

export default Blog;
