import Doberman from './images/Doberman-Pinscher-800px.png'
import Rottweiler from './images/rottweiler.png'
import GermanShephard from './images/GermanShephard.png'

export const Breeds = {
  rottweiler: {
    image: Rottweiler,
    facts: [
        'They descended from herding dogs used by Roman legions', '"Rottweler" translates to "Butcher\'s Dog" from German', 'Rottweiler\'s were used as rescue dogs during 9/11'
    ]
  },
  german_shephard: {
    image: GermanShephard,
    facts: [
        'Compared to other dogs they have some of the best scenting abilities', 'The tend to be big chewers', 'They shed alot'
    ]
  },
  doberman: {
    image: Doberman,
    facts: [
        'The doberman was created in the 19th century by a German tax collector', 'During WWII, Doberman were used to carry messages', 'The doberman is the only breed bred specifically to be a personal protection dog'
    ]
  }
};