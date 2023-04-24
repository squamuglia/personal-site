import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div
      className="min-h-screen p-8 relative text-white"
      style={{ background: 'blue' }}
    >
      <h1 className="text-3xl mb-4">Max Smouha</h1>
      <div>
        <p className="mb-2">
          Welcome. There's not much here currently because we're{' '}
          <span className="whitespace-nowrap">
            <img
              src="/digger.gif"
              alt="Under Construction"
              className="inline-block h-8 mx-1"
            />
            under construction{' '}
            <img
              src="/digger.gif"
              alt="Under Construction"
              className="inline-block h-8 ml-1"
            />
          </span>
          .
        </p>

        <p className="mb-2 text-lg">Quick facts:</p>

        <ul className="list-disc ml-4">
          <li className="mb-2">Software engineer & entrepreneur</li>
          <li className="mb-2">Based in NYC</li>
          <li className="mb-2">
            <a
              href="https://brex.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ex-Brex
            </a>
          </li>
          <li className="mb-2">Previously health, fin, and adtech</li>
          <li className="mb-2">
            Currently building{' '}
            <a
              href="https://maypleglobal.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mayple Global
              <img
                src="/earth.gif"
                alt="earth"
                className="inline-block h-6 mx-2"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 align-center mt-8 absolute bottom-8">
        <a href="mailto:maxsmouha@gmail.com" className="underline">
          email
        </a>
        <a
          href="https://www.linkedin.com/in/max-smouha/"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          social
        </a>
        <a
          href="https://github.com/squamuglia"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          git
        </a>
      </div>
    </div>
  );
};

export default Home;
