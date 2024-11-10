$(function() {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  // 當影片進入視窗時播放，離開視窗時停止
  const playVideo = (video, container) => {
    container.style.display = "block"; // 顯示影片容器
    if (video.paused) {
      video.play();
    }
  };

  const pauseVideo = (video, container) => {
    video.pause();
    container.style.display = "none"; // 隱藏影片容器
  };

  // 使用 IntersectionObserver 監控影片容器進入視窗的狀態
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 當 video1-container 進入視窗時，開始播放 video1
        if (entry.target.id === 'video1-container') {
          playVideo(video1, entry.target);
        } 
        // 當 video2-container 進入視窗時，開始播放 video2
        else if (entry.target.id === 'video2-container') {
          playVideo(video2, entry.target);
        }
      } else {
        // 當 video1-container 滾動離開視窗時，停止播放 video1
        if (entry.target.id === 'video1-container') {
          pauseVideo(video1, entry.target);
        } 
        // 當 video2-container 滾動離開視窗時，停止播放 video2
        else if (entry.target.id === 'video2-container') {
          pauseVideo(video2, entry.target);
        }
      }
    });
  };

  // 建立並啟動 IntersectionObserver
  const observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.5 // 視窗中至少 50% 時開始播放
  });

  observer.observe(document.getElementById('video1-container')); // 監視 video1
  observer.observe(document.getElementById('video2-container')); // 監視 video2
});
