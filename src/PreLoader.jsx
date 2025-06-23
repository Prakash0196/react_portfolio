// Preloader.js

const Preloader = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setTimeout(() => setLoading(false), 500); // optional small delay
  //   };

  //   window.addEventListener("load", handleLoad);
  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

  // if (!loading) return null;

  return <div id="preloader"></div>;
};

export default Preloader;
