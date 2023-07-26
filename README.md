Compassion Cats

This demo builds upon the Cat Fetcher, but adds a number of features designed to show compassion for special-needs users.

- **Activity** - The buttons expand size to acknowledge a press. An hourglass and text update shows the work is in progress, so the user knows something has happened, and is happening.
- **Concurrency** - Multiple clicks are handled in a queueing or blocking mode, changable at will, so users are not confused if they press a button multiple times inadvertantly
- **Cancelability** - A cancel button allows users to stop an in-progress update. In-progress work is aborted upon an unmount so as not to cause DOM update errors.
- **Animation** - When the image changes, it animates to the new one, so a smaller portion of the screen changes at one time, thereby providing continuity to the user.
- **Errors/Timeouts** - A user will see an error with remedy steps if an error or unreasonable load time occurs, so the user feels they can recover at any time.

Bonus

- Discoverability - Upon load, the component shows/demos what it is capable of to suggest to the user what's possible.
