# Data Structures and Algorithms
## 01-Reverse an Array
Take an array and reverse the order of the elements

### Challenge
Given an input array, return an array with the elements in reverse order

### Solution
![whiteboard01](./assets/01_array_reverse.jpg)

## 02-Shift an Array
Insert and shift an array in middle at index

### Challenge
Given an input array and an item to insert, return an array where the item has been inserted into the middle of the array (rounding up for odd numbered arrays). The insertShiftArray method is arity of 2.

### Solution
![whiteboard02](./assets/02_array_shift.jpg)

## 03- Binary Search in Array
Search a sorted array for target value and return its index

### Challenge
Given a sorted input array and target value to search, return the index of the search value if it is found and if it is not in the array return -1. The binary version of this search utilizes finding the middle of the array and systematically discounting half the values with every operation.  

### Solution
![whiteboard03a](./assets/03_array_binary_search_a.jpg)
![whiteboard03b](./assets/03_array_binary_search_b.jpg)

## 04- Linked-Lists
Create a linked list data sctructure with methods

### Challenge
Create linked list data structure and add the methods:
- append
- prepend
- insertBefore
- insertAfter
- reverse
- serialize
- deserialize
- kFromEnd   

### Solution
![whiteboard04a](./assets/04_LL_insert_methods.jpg)
![whiteboard04b](./assets/04_LL_kfromend.jpg)
![whiteboard04c](./assets/04_LL_method.jpg)

## 05- Stacks and Queues
Create stack and queue data sctructures with methods

### Challenge
Create stacks and queues data structures and add the methods:
- stacks:
  - push
  - pop
  - serialize/deserialize
- queues:
  - enqueue
  - dequeue
  - serialize/deserialize

## 06- Stacks with Queues
Create a queue by using stacks

### Challenge
Make a data structure that is FIFO with only access LIFO data structure. 

### Solution
![whiteboard06](./assets/06_stacks_with_queues.jpg)

## 07- FIFO Animal Shelter
An animal shelter takes in dogs and cats, and gives them to new owners.  If someone asks for a dog or cat they get the cat or dog that has been waiting the longest(First in First out - FIFO).

### Challenge
The function animalShelter takes an optional input of a preference and returns a cat or dog.  If someone asks for a dog or cat from the animal shelter they get the cat or dog that has been waiting the longest.  If they ask for an animal without a preference they get whatever has been waiting the longest.

### Solution
![whiteboard07](./assets/07_fifo_animal_shelter.jpg)

## 08- Multi-bracket-validation
Create a function to validate a strings balance for brackets.

### Challenge
To take a string of whatever size and return true or false if brackets were balanced, meaning each bracket has open and close and can nest within each other while not overlapping.  It is not effected by any non-bracket characters.

Examples:
{} -> true
() -> true
[] -> true
[{}] -> true
[{]} -> false
[true] -> true

### Solution
![whiteboard08](./assets/08_multi_bracket_validation.jpg)

## 09- Trees
Create a constructor function for a tree data structure

### Challenge
Create a constructor function for a tree data structure with the following methods:

- insert (node)
- remove (node)
- find (node)
- serialize()
- deserialize()
- breadth-first traversal

![whiteboard09](./assets/09_breadth_first_traversal.jpg)

## 10 - FizzBuzz Tree
Create a function to fizzbuzzify a tree

### Challenge
Create a function which takes a binary search tree as an input.  It then replaces all nodes in the tree that are multiples of 3 to the string `fizz`, all multiples of 5 as `buzz`, and multiples of both as `fizzbuzz`.


![whiteboard10](./assets/10_fizzbuzz_tree.jpg)

