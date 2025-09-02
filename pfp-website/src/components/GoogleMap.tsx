"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.6503!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4b3a8f2f8f9%3A0x1b2b3c4d5e6f7g8h!2z5p2x5Lqs6aeF44Gu5Yy65Y2X5LqM5qW15q2j44GU44GE44Gf44Gg!5e0!3m2!1sja!2sjp!4v1234567890"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="株式会社PFP所在地"
      />
    </div>
  );
}
