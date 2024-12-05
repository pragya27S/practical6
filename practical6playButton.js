class PlayButton {
    constructor(audioPlayer) {
        this.audioPlayer = audioPlayer; // Reference to the AudioPlayer instance
        this.playButton = document.getElementById('play-button');
        this.playButtonImage = this.playButton.querySelector('img');
        this.setupEventListener();
    }

    setupEventListener() {
        this.playButton.addEventListener('click', () => {
            if (this.audioPlayer.isPlaying) {
                this.audioPlayer.pause();
                this.updateButtonState(false);
            } else {
                this.audioPlayer.play();
                this.updateButtonState(true);
            }
        });
    }

    updateButtonState(isPlaying) {
        this.playButtonImage.src = isPlaying ? 'C:\Users\LENOVO\OneDrive\Desktop\webImages\pauseButton.webp' : 'C:\Users\LENOVO\OneDrive\Desktop\webImages\playButton.webp';
        this.playButtonImage.alt = isPlaying ? 'Pause' : 'Play';
    }
}

// Export the PlayButton class if using ES Modules
// export default PlayButton;

