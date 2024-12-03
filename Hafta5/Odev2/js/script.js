
const playSound = (e) => {
    const keyCode = e.type === 'keydown' ? e.keyCode : e.target.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(() => key.classList.remove("playing"), 100);
};

document.querySelectorAll(".key").forEach((key) =>
    key.addEventListener("click", playSound)
);

window.addEventListener("keydown", playSound);
