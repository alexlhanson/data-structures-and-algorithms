const Shelter = require('./fifo_animal_shelter');

describe('animal shelter queue', () => {

  /********************************************************************************
  *         enqueue tests                                                         *
  ********************************************************************************/
  test('when animal is enqueued it shows up in shelter', () => {
    myShelter = new Shelter();
    myShelter.enqueue('cat');

    expect(myShelter.storage.head.value).toBe('cat');  
  });

  test('when enqueue of not a dog or cat returns error', () => {
    myShelter = new Shelter();
    expect( () => {
      myShelter.enqueue('hamster');
    }).toThrow('Animal shelter only accepts cat and dog animals')
  })

  test('when enqueue is called with nothing returns error', () => {
    myShelter = new Shelter();
    expect( () => {
      myShelter.enqueue();
    }).toThrow('Animal shelter only accepts cat and dog animals')
  })

  /********************************************************************************
  *         dequeue tests                                                         *
  ********************************************************************************/
  test('when no preference is given returns next animal in queue', () => {
    myShelter = new Shelter();
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');
    let animal = myShelter.dequeue();

    expect(animal.value).toBe('cat');  
  });

  test('dequeues cat at the front of queue when preference is cat', () => {
    myShelter = new Shelter();
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');
    let animal = myShelter.dequeue('cat');

    expect(animal.value).toBe('cat');
  })
  
  
  test('dequeues first dog from queue when preference is dog', () => {
    myShelter = new Shelter();
    myShelter.enqueue('cat');
    myShelter.enqueue('dog');
    let animal = myShelter.dequeue('dog');

    expect(animal.value).toBe('dog');
  })
});