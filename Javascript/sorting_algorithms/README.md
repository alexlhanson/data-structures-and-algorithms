#SORTING ALGORITHMS
This folder contains a few implementations of sorting functions.

##TOC
- [Insertion](#insertion)
- [Quick](#quick)
- [Merge](#merge)
- [Select](#selection)
- [Radix](#radix)

## Insertion
The insertion sort is an in-place sorting algorithm.  While it doesn't perform as well as some of the other methods here it is very good with relatively sorted data. It essentially sorts each element at a time into place and goes up the list.


## Quick
The quick sort is a divide and conquer sort that is often used with recursion to break an array down recursively while taking the last value of the array as a pivot and sorting left and right arrays according to values greater or less than the pivot.  Arrays are then concatenated going back up the call stack.

####Whiteboard
![whiteboard06](../assets/quick_sort.jpg)

## Merge
The merge sort is a divide and conquer sort that is often used with recursion to break down the array into arrays of one recursively and sort while merging and returning back up the call stack.  

![whiteboard06](../assets/merge_sort.jpg)

## Selection
The selection sort is an in-place sort that divides the list into an sorted and unsorted portion. It walks up the list comparing and swapping values.

## Radix
The radix sort is not a divide in conquer method using recursion, nor is it entirely in-place as it uses two hash tables to sort values by their digits.  This sort performs very well for time when ranges are smaller. 

####Whiteboard
![whiteboard06](../assets/radix_sort_a.jpg)
![whiteboard06](../assets/radix_sort_b.jpg)
