export class NoiseMachine {
    constructor(store) {
        this.store = store;

        try {
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            this.context = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }

        this.gainNode = this.context.createGain();

        this.osc1 = this.context.createOscillator();
        this.osc1.connect(this.gainNode);

        this.gainNode.gain.value = 0.051;

        this.osc1.type = 'square';
        this.osc1.frequency.value = 8000;
        this.osc1.detune.value = 7;
        this.osc1.start(0);

        store.subscribe( () => {
            let state = store.getState();
            let currentStep = state.steps[state.controller.currentTick];

            if (state.controller.isPlaying) {
                if (!this._gainNodeConnected) {
                    this.gainNode.connect(this.context.destination);
                    this._gainNodeConnected = true;
                }
            } else if (this._gainNodeConnected) {
                if (this._gainNodeConnected) {
                    this.gainNode.disconnect(this.context.destination);
                    this._gainNodeConnected = false;
                }
            }

            if (currentStep.selected) {
                this.setByStep(currentStep)
            }

        });
    }

    setByStep(step) {
        this.osc1.frequency.value = step.frequency;
    }
}



