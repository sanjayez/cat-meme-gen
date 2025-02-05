
import kitten from '../assets/kitten.webp';

function HowToSection() {
  return (
    <section className="text-white p-6 mt-8 rounded text-center">
      <h2 className="text-4xl font-bold mb-4">How to?</h2>
      <img 
        src={kitten} 
        alt="How to guide" 
        className="mb-4 w-full max-w-64 mx-auto rounded" 
      />
      <p className="mb-2 max-w-xl mx-auto">
        Enter a description of your ideal cat meme in the text box above and wait for the preview to appear and download the meme if you like it!.
      </p>
    </section>
  );
}

export default HowToSection; 