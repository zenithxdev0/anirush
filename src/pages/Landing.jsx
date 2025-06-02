import React from "react";
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";
import Container from "../util/Container";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Logo from "../util/Logo";
import Search from "../components/Search";

const Landing = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home')
  }

  return (
    <>
      <Container className={`min-h-screen`}>
        <div className="w-full min-h-screen pt-4 pb-20 flex justify-center">
          <div>
            <div className="flex flex-col items-center mt-28 gap-2 px-4">
              <Logo className={"w-48"} />
              <Search />
              <small className="text-amber-300 font-medium text-center">
                anirush.vercel.app - Just a better place to watch anime online
                for free!
              </small>
              <Button onClick={goHome} className={"mt-6"} color={"amber"}>
                Go to home page
              </Button>

              {/* Info section below the button */}
              <div className="mt-8 max-w-3xl text-left text-sm text-gray-300 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">What is Anirush?</h2>
                  <p>
                    <strong>Anirush</strong> is a free anime streaming platform with a wide variety of genres such as
                    Action, Comedy, Drama, Romance, and more, it offers content for all
                    age groups, including kids under 12.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">Anirush’s Streaming Quality</h2>
                  <p>
                    Anirush provides medium to high-definition streaming with quick
                    loading times, using third-party hosts like mp4upload and streamtape.
                    Subbed and dubbed options are available for convenience.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">Is Anirush Legal and Safe?</h2>
                  <p>
                    Streaming on Anirush is generally safe and not considered illegal in
                    the U.S. as long as you're not downloading or redistributing content.
                    To stay secure, consider using a VPN, antivirus, and ad blocker.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white mb-1">Best Alternatives to Anirush</h2>
                  <p>
                    While Anirush offers a free watching experience, you can also check out
                    trusted alternatives like 9anime.to and aniwatch.to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
