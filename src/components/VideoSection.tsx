import React, { useState, useEffect } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [tiktokThumbnails, setTiktokThumbnails] = useState<{[key: number]: string}>({});

  const videos = [
    {
      id: 1,
      title: "Fun in the Sun",
      description: "Enjoying what we do!",
      thumbnail: "", // Will be set dynamically
      tiktokUrl: "https://www.tiktok.com/@precisionk9llc/video/7513736542364552494",
      type: 'tiktok' as const
    },
    {
      id: 2,
      title: "Remi putting that work in!",
      description: "Give him some love ya'll!!!",
      thumbnail: "", // Will be set dynamically
      tiktokUrl: "https://www.tiktok.com/@precisionk9llc/video/7489165064990182699?is_from_webapp=1&sender_device=pc&web_id=7458090650475791903",
      type: 'tiktok' as const
    },
    {
      id: 3,
      title: "Chasing the dream!",
      description: "Love seeing the changes",
      thumbnail: "", // Will be set dynamically
      tiktokUrl: "https://www.tiktok.com/@precisionk9llc/video/7508143850309848363?is_from_webapp=1&sender_device=pc&web_id=7458090650475791903",
      type: 'tiktok' as const
    }
  ];

  // Fetch TikTok thumbnail using oEmbed API
  useEffect(() => {
    const fetchTikTokThumbnails = async () => {
      const tiktokVideos = videos.filter(video => video.type === 'tiktok');
      
      for (const video of tiktokVideos) {
        try {
          const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.tiktokUrl)}`);
          const data = await response.json();
          if (data.thumbnail_url) {
            setTiktokThumbnails(prev => ({
              ...prev,
              [video.id]: data.thumbnail_url
            }));
          }
        } catch (error) {
          console.log(`Could not fetch TikTok thumbnail for video ${video.id}, using fallback`);
          // Use different fallback images for different videos
          const fallbackImage = video.id === 1 
            ? "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505443232_122180680418293104_5464224085595941193_n.jpg"
            : video.id === 2 
              ? "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//487956918_122169347534293104_1659712244540075194_n.jpg"
              : "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//492418764_122173776656293104_3242729791780007936_n.jpg";
          
          setTiktokThumbnails(prev => ({
            ...prev,
            [video.id]: fallbackImage
          }));
        }
      }
    };

    fetchTikTokThumbnails();
  }, []);

  // Update TikTok videos' thumbnails when we get them
  const updatedVideos = videos.map(video => {
    if (video.type === 'tiktok') {
      const fallbackImage = video.id === 1 
        ? "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505443232_122180680418293104_5464224085595941193_n.jpg"
        : video.id === 2 
          ? "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//487956918_122169347534293104_1659712244540075194_n.jpg"
          : "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//492418764_122173776656293104_3242729791780007936_n.jpg";
      
      return { 
        ...video, 
        thumbnail: tiktokThumbnails[video.id] || fallbackImage 
      };
    }
    return video;
  }
  );

  const openModal = (video: typeof videos[0]) => {
    if (video.type === 'tiktok') {
      // For TikTok videos, open directly in new tab
      window.open(video.tiktokUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // For other videos, open in modal
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="videos" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy dark:bg-gray-600 rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-gray-100 mb-6 tracking-tight">
                See Our Training in Action
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Watch real transformations and see why our training methods deliver exceptional results for dogs and their owners.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {updatedVideos.map((video) => (
                <div 
                  key={video.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(video)}
                >
                  {/* Video Thumbnail */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    {video.thumbnail ? (
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if thumbnail fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "https://vgnurskjpkgdmnxdvatt.supabase.co/storage/v1/object/public/images//505443232_122180680418293104_5464224085595941193_n.jpg";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="text-gray-400 dark:text-gray-500">Loading thumbnail...</div>
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gold hover:bg-gold/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl">
                        {video.type === 'tiktok' ? (
                          <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-navy" />
                        ) : (
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-navy ml-1" fill="currentColor" />
                        )}
                      </div>
                    </div>

                    {/* Video Type Badge */}
                    <div className="absolute top-3 right-3 flex items-center space-x-2">
                      {video.type === 'tiktok' && (
                        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.24 3.24 0 01-.46.05 3.86 3.86 0 01-3.23-1.78A3.81 3.81 0 016 7.83a3.85 3.85 0 010-4.09 3.83 3.83 0 013.2-1.78 3.24 3.24 0 01.46.05 3.87 3.87 0 013.14 3.78V2h2.08v.44a4.83 4.83 0 013.77 4.25z"/>
                          </svg>
                          TikTok
                        </div>
                      )}
                      {video.type === 'tiktok' && (
                        <div className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          External
                        </div>
                      )}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-3 group-hover:text-gold dark:group-hover:text-yellow-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center text-gold hover:text-navy dark:hover:text-gray-100 font-semibold transition-colors duration-300 group">
                        {video.type === 'tiktok' ? (
                          <>
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Watch on TikTok
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Watch Video
                          </>
                        )}
                      </div>
                      {video.type === 'tiktok' && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          Opens in new tab
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-navy dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Start Your Dog's Transformation?
                </h3>
                <p className="text-white/90 dark:text-gray-200/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join the hundreds of satisfied clients who have experienced the Precision K9 difference.
                </p>
                <button
                  onClick={() => {
                    const contact = document.querySelector('#contact');
                    if (contact) {
                      window.scrollTo({
                        top: contact.getBoundingClientRect().top + window.scrollY - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal for non-TikTok videos */}
      {isModalOpen && selectedVideo && selectedVideo.type !== 'tiktok' && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedVideo.description}
              </p>
            </div>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideo.videoUrl}
                title="Training Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;