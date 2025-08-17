const teacher = {
  teacherName: "adel john",
  age: 36,
  department: "developer",
  totalPlayList: 10,
  totalVideos: 5,
  totalLikes: 41,
  email: "example@gmail.com",
  phone: [], // Array to store phone numbers
  yearOfExperiance: 20,
  shortBio: "good",

  // --- All Courses ---
  courses: [
    {
      courseName: "HTML",
      date: "21-2-2025",
      numberOfVideos: 4,
      likes: 45,
      noComments: 6,
      comments: [],

      // --- Course Functions ---
      updateCourseName: function (newCourseName) {
        this.courseName = newCourseName;
      },
      addVideo: function () {
        this.numberOfVideos++;
      },
      removeVideo: function () {
        if (this.numberOfVideos > 0) this.numberOfVideos--;
      },
      addLike: function () {
        this.likes++;
      },
      removeLike: function () {
        if (this.likes > 0) this.likes--;
      },
      addComment: function (username, text) {
        const comment = {
          username: username,
          text: text,
          date: new Date().toLocaleString(),
        };
        this.comments.push(comment);
        this.noComments++;
      },
      removeComment: function (i) {
        if (i >= 0 && i < this.comments.length) {
          this.comments.splice(i, 1);
          this.noComments--;
        }
      },
      updateComment: function (i, newText) {
        if (i >= 0 && i < this.comments.length) {
          this.comments[i].text = newText;
          this.comments[i].date = new Date().toLocaleString();
        }
      },
    },
  ],

  // --- Teacher Functions ---
  // Update teacher name
  updateTeacherName: function (newName) {
    this.teacherName = newName;
  },

  // ========== Methods for Email ==========
  updateEmail: function (newEmail) {
    this.email = newEmail;
  },

  // ========== Methods for Phone ==========
  addPhone: function (newPhone) {
    // Add only if not already exists
    if (!this.phone.includes(newPhone)) {
      this.phone.push(newPhone);
    }
  },
  updatePhone: function (newPhone, i) {
    if (i >= 0 && i < this.phone.length) {
      this.phone[i] = newPhone;
    }
  },
  removePhone: function (i) {
    if (i >= 0 && i < this.phone.length) {
      this.phone.splice(i, 1);
    }
  },

  // ========== Methods for Year Of Experience ==========
  updateYearOfExperiance: function (newYears) {
    this.yearOfExperiance = newYears;
  },

  // ========== Methods for Short Bio ==========
  updateShortBio: function (newBio) {
    this.shortBio = newBio;
  },

  // Update department
  updateDepartment: function (newDept) {
    this.department = newDept;
  },

  // Playlist controls
  increasePlaylist: function () {
    this.totalPlayList++;
  },
  decreasePlaylist: function () {
    if (this.totalPlayList > 0) this.totalPlayList--;
  },

  // Video controls
  increaseTotalVideos: function () {
    this.totalVideos++;
  },
  decreaseTotalVideos: function () {
    if (this.totalVideos > 0) this.totalVideos--;
  },

  // Likes controls
  increaseLikes: function () {
    this.totalLikes++;
  },
  decreaseLikes: function () {
    if (this.totalLikes > 0) this.totalLikes--;
  },

  // Show general statistics
  getStats: function () {
    return {
      teacherName: this.teacherName,
      totalVideos: this.totalVideos,
      totalLikes: this.totalLikes,
      totalPlayList: this.totalPlayList,
      department: this.department,
    };
  },

  // Add new course
  addCourse: function (name, date) {
    const newCourse = {
      courseName: name,
      date: date,
      numberOfVideos: 0,
      likes: 0,
      noComments: 0,
      comments: [],
    };
    this.courses.push(newCourse);
  },

  // Remove course by index
  removeCourse: function (i) {
    if (i >= 0 && i < this.courses.length) {
      this.courses.splice(i, 1);
    }
  },
};
const teacherArray=JSON.parse(localStorage.getItem("teacherArray")) ||[];

const student = {
  name: "",
  email: "",
  password: "",
  icon: "./images/pic-1.jpg",
  token:"",
  totalLikes: 0,
  totalComment: 0,
  savedPlaylist: 0,

  // ===== Methods for Profile =====

  // Update student name
  updateName: function (newName) {
    this.name = newName;
  },

  // Update student email
  updateEmail: function (newEmail) {
    this.email = newEmail;
  },

  // Update student password
  updatePassword: function (newPassword) {
    this.password = newPassword;
  },

  // Update/change profile icon
  updateIcon: function (newIcon) {
    this.icon = newIcon;
  },

  // ===== Methods for Stats =====

  // Increase likes
  addLike: function () {
    this.totalLikes++;
  },

  // Decrease likes (not below zero)
  removeLike: function () {
    if (this.totalLikes > 0) this.totalLikes--;
  },

  // Increase comments
  addComment: function () {
    this.totalComment++;
  },

  // Decrease comments (not below zero)
  removeComment: function () {
    if (this.totalComment > 0) this.totalComment--;
  },

  // Save new playlist
  addPlaylist: function () {
    this.savedPlaylist++;
  },

  // Remove saved playlist (not below zero)
  removePlaylist: function () {
    if (this.savedPlaylist > 0) this.savedPlaylist--;
  },

  // ===== Show Student Info =====
  getStudentInfo: function () {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      icon: this.icon,
      totalLikes: this.totalLikes,
      totalComment: this.totalComment,
      savedPlaylist: this.savedPlaylist,
    };
  },
};
const studentArray=JSON.parse(localStorage.getItem("studentArray")) ||[];

const iconsArray=["./images/pic-1.jpg","./images/pic-2.jpg","./images/pic-3.jpg"
  ,"./images/pic-4.jpg","./images/pic-5.jpg","./images/pic-6.jpg","./images/pic-7.jpg","./images/pic-8.jpg","./images/pic-9.jpg"
];



// variable
const totalLikes=document.getElementById("totalLikes");
const totalComment=document.getElementById("totalComment");
const savedPlaylist=document.getElementById("savedPlayList");
const UserName=document.getElementById("username");
const imageCurrwntUser=document.querySelector(".up-info img");
const menu=document.querySelector(".fa-bars");
const sideBar=document.querySelector(".side-nav-bar");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("closeMenu");

  closeMenu.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("hidden")
  });
console.log(menu);
menu.classList.add("cursor-pointer");

menu.addEventListener("click", ()=>{
   sidebar.classList.remove("hidden")
   sidebar.classList.remove("-translate-x-full");
   sidebar.classList.add("translate-x-0");
  console.log(sideBar)
   sideBar.classList.toggle("lg:block");
   

    console.log(1)
})



let currentUser=studentArray.filter(e=>{
    return e.token===localStorage.getItem("token");
})
UserName.innerHTML=currentUser[0].name;
imageCurrwntUser.src=currentUser[0].icon


function generateToken(length = 32) {
  // Use browser crypto API for strong random values
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);

  // Convert to hex string
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
function indexLikeAndComment(){
totalLikes.innerHTML=currentUser[0].totalLikes
totalComment.innerHTML=currentUser[0].totalComment
savedPlaylist.innerHTML=currentUser[0].savedPlaylist

}
