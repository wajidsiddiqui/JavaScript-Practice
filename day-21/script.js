const reels = [
  {
    username: "codewithayush",
    profile: "https://picsum.photos/id/1011/200",
    video: "./videos/1.mp4",
    caption: "Dark mode > Light mode 😎",
    likeCount: 14820,
    commentCount: 423,
    shareCount: 92,
    isLiked: false,
    isFollowed: false,
    isMuted: true,
    isSaved: false
  },
  {
    username: "frontend.ninja",
    profile: "https://picsum.photos/id/1005/200",
    video: "./videos/2.mp4",
    caption: "CSS can change everything 🔥",
    likeCount: 25410,
    commentCount: 710,
    shareCount: 164,
    isLiked: true,
    isFollowed: true,
    isMuted: true,
    isSaved: true
  },
  {
    username: "travel.with.me",
    profile: "https://picsum.photos/id/1027/200",
    video: "./videos/3.mp4",
    caption: "Solo trip to Bali 🌴",
    likeCount: 54120,
    commentCount: 1830,
    shareCount: 652,
    isLiked: false,
    isFollowed: false,
    isMuted: true,
    isSaved: false
  },
  {
    username: "fitness.pro",
    profile: "https://picsum.photos/id/1025/200",
    video: "./videos/4.mp4",
    caption: "12 min Home Workout 💪",
    likeCount: 32110,
    commentCount: 945,
    shareCount: 201,
    isLiked: false,
    isFollowed: true,
    isMuted: true,
    isSaved: false
  },
  {
    username: "foodie.world",
    profile: "https://picsum.photos/id/1062/200",
    video: "./videos/5.mp4",
    caption: "Best Burger Ever 🍔",
    likeCount: 68400,
    commentCount: 2400,
    shareCount: 730,
    isLiked: true,
    isFollowed: false,
    isMuted: true,
    isSaved: true
  },
  {
    username: "music.vibes",
    profile: "https://picsum.photos/id/1001/200",
    video: "./videos/6.mp4",
    caption: "Late Night Piano 🎹",
    likeCount: 17200,
    commentCount: 602,
    shareCount: 118,
    isLiked: false,
    isFollowed: true,
    isMuted: true,
    isSaved: false
  },
  {
    username: "tech.reviewer",
    profile: "https://picsum.photos/id/1012/200",
    video: "./videos/7.mp4",
    caption: "Top 5 Budget Phones 📱",
    likeCount: 21890,
    commentCount: 850,
    shareCount: 266,
    isLiked: true,
    isFollowed: false,
    isMuted: true,
    isSaved: true
  },
  {
    username: "Ghulam E Rasool",
    profile: "https://picsum.photos/id/1018/200",
    video: "./videos/8.mp4",
    caption: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ",
    likeCount: 2.8+'b',
    commentCount: 411,
    shareCount: 83,
    isLiked: true,
    isFollowed: true,
    isMuted: true,
    isSaved: false
  },
  {
    username: "gaming.hub",
    profile: "https://picsum.photos/id/1024/200",
    video: "./videos/9.mp4",
    caption: "New Gameplay Highlights 🎮",
    likeCount: 47890,
    commentCount: 1120,
    shareCount: 301,
    isLiked: true,
    isFollowed: true,
    isMuted: true,
    isSaved: false
  },
  {
    username: "learn.js",
    profile: "https://picsum.photos/id/1006/200",
    video: "./videos/6.mp4",
    caption: "JavaScript Practice Day 21 💻",
    likeCount: 10540,
    commentCount: 298,
    shareCount: 74,
    isLiked: false,
    isFollowed: false,
    isMuted: true,
    isSaved: false
  }
];

let allReels = document.querySelector('.all-reels')
let data = ""

reels.forEach((elem,idx) => {

    data += `
    
    <div class="reel">

        <video autoplay loop muted playsinline src="${elem.video}"></video>

        <div class="overlay">

            <div class="left">

                <div class="user">

                    <img src="${elem.profile}" alt="">

                    <h4>${elem.username}</h4>

                    <button>${elem.isFollowed ? "Following" : "Follow"}</button>

                </div>

                <div class="caption">
                    <p>${elem.caption}</p>
                </div>

            </div>

            <div class="right">

                <div class="like">
                    <i class="${elem.isLiked ? "ri-heart-fill" : "ri-heart-line"}"></i>
                    <h6>${elem.likeCount}</h6>
                </div>

                <div class="comment">
                    <i class="ri-chat-1-line"></i>
                    <h6>${elem.commentCount}</h6>
                </div>

                <div class="share">
                    <i class="ri-share-forward-line"></i>
                    <h6>${elem.shareCount}</h6>
                </div>

                <div class="save">
                    <i class="${elem.isSaved ? "ri-bookmark-fill" : "ri-bookmark-line"}"></i>
                </div>

                <div class="more">
                    <i class="ri-more-2-line"></i>
                </div>

            </div>

        </div>

    </div>

    `;
});
allReels.innerHTML = data;
allReels.addEventListener('dblclick',(dets)=>{
    console.log(dets.target);
    
})