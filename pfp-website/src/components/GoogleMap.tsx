"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8278533985424!2d139.6588!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4b1e0b0b0b%3A0x1234567890abcdef!2z5p2x5Lqs6YO95LiW55Sw6LC35Yy66Iul5p6X!5e0!3m2!1sja!2sjp!4v1234567890123"
        width="100%" 
        height="100%" 
        style={{ border: 0, minHeight: '256px' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="株式会社PFP所在地"
      />
    </div>
  );
}
