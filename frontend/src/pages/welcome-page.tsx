import Button from "../components/button/button";

function WelcomePage(): JSX.Element {
  return (
    <div className="flex flex-col h-full px-4 pb-20">
      <div className="text-center p-20 mt-10 bg-secondary">LOGO</div>
      <div className="mt-auto">
        <h1 className="text-2xl text-center">Hey Welcome!</h1>
        <p className="mt-5">
          Some information about app, Some information about app, Some
          information about app
        </p>
        <div className="flex flex-col">
          <Button primary rounded className="mt-5">
            Get Started
          </Button>
          <Button secondary rounded className="mt-2">
            I already have an account
          </Button>
        </div>
      </div>
    </div>
  );
}

export { WelcomePage };
