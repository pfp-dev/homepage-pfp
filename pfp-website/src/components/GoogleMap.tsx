"use client";

export default function GoogleMap() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6958657772334!2d139.6967440762442!3d35.659864131146605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dfa72e9aa77%3A0xcb25c496428f18f4!2zRlBH44Oq44Oz44Kv44K55riL6LC36YGT546E5Z2C!5e0!3m2!1sja!2sus!4v1757993650819!5m2!1sja!2sus"
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
