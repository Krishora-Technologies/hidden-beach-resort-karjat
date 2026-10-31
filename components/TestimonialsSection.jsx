'use client';

const testimonials = [
  {
    quote: '“I gave this 5 stars because it’s simple, useful, and I actually use it daily.”',
    name: 'Hugo',
    role: 'CEO - Microsoft',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a7174d4647b49860fe61_Avatar%20Image-5.avif',
  },
  {
    quote: '“Easy to use and very clean design. Reading has never been this enjoyable.”',
    name: 'Katy Perry',
    role: 'CEO - Webflow',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a717326654f6e9b549a0_Avatar%20Image-7.avif',
  },
  {
    quote: '“I like how smooth everything works. I open it every morning to read.”',
    name: 'Victoria',
    role: 'Designer - Figma',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a717c542c8fc2fe085c4_Avatar%20Image-1.avif',
  },
  {
    quote: '“The app is fast, clear, and makes reading super fun. Highly recommend!”',
    name: 'Justin',
    role: 'Owner - SteelSeries',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a7170557444d6f47012d_Avatar%20Image-4.avif',
  },
  {
    quote: '“I don’t usually leave reviews, but this is honestly the best reading app I’ve tried.”',
    name: 'Wayne',
    role: 'CEO - Oversight',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a7179f8e344e7070bcdd_Avatar%20Image-6.avif',
  },
  {
    quote: '“It just works. No confusion, no extra stuff. I can read what I want quickly.”',
    name: 'Swift',
    role: 'Chapter',
    avatar: 'https://cdn.prod.website-files.com/68d144a80d497ed4650a22b0/68d5a7170c2b53689900e5cc_Avatar%20Image-2.avif',
  },
];

export default function TestimonialsSection() {
  return (
    <div id="testimonials" className="section overflow-hidden">
      <div className="section-spacing no-margin-bot">
        <div className="container">
          <div className="section-inside">
            <div className="grid-title">
              <div className="grid-title-holder">
                <h2 className="animated-title">Client Talk.</h2>
              </div>
              <div id="w-node-c2590e11-9952-23c7-28ee-23c417db07ed-650a2375" className="gird-paragraph-holder">
                <div className="h6-style">(Testimonials)</div>
              </div>
            </div>

            <div className="testimonail-grid">
              {testimonials.map((item, idx) => (
                <div key={idx} className="testimonail-item">
                  <div className="testimonail">{item.quote}</div>
                  <div className="profile-holder">
                    <img loading="lazy" src={item.avatar} alt={item.name} className="profile-image" />
                    <div className="profile-content">
                      <div className="profile-title">{item.name}</div>
                      <div className="profile-job">{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="line no-margin-bottom" />
      </div>
    </div>
  );
}

