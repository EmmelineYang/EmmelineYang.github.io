$(function() {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  // 播放影片
  const playVideo = (video) => {
    if (video.paused) {
      video.play();
    }
  };

  // 停止影片
  const pauseVideo = (video) => {
    video.pause();
  };

  // 使用 IntersectionObserver 監控影片容器進入視窗的狀態
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      const videoContainer = entry.target;
      const video = videoContainer.id === 'video1-container' ? video1 : video2;

      if (entry.isIntersecting) {
        // 當影片容器進入視窗，播放影片
        playVideo(video);
      } else {
        // 當影片容器離開視窗，暫停影片
        pauseVideo(video);
      }
    });
  };

  // 建立 IntersectionObserver 來監視 video1 和 video2
  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.5 // 當視窗中至少 50% 的區域進入視窗時播放影片
  });

  // 開始觀察 video1 和 video2
  observer.observe(document.getElementById('video1-container'));
  observer.observe(document.getElementById('video2-container'));
});
