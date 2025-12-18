---
title: Global Math Functions
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

# Global math functions 

The following math functions are part of global. Trig functions use or return radians, not degrees.

----

## Abs(x as Float) as Float

Returns the absolute value of the argument.

## Atn(x as Float) as Float

Returns the arctangent (in radians) of the argument; that is, ATN(X)
returns "the angle whose tangent is X". To get arctangent in degrees,
multiply ATN(X) by 57.29578.

## Cdbl(x as Integer) as Float

Also returns a single precision float representation of the argument.
Someday may return double.

## Cint(x as Float) as Integer

Returns an integer representation of the argument, rounding up from
midpoints. CINT(2.1) returns 2; CINT(2.5) returns 3; CINT(-2.2) returns
-2; CINT(-2.5) returns -2; CINT(-2.6) returns -3.

## Cos(x as Float) as Float

Returns the cosine of the argument (argument must be in radians). To
obtain the cosine of X when X is in degrees, use CGS(X\*.01745329).

## Csng(x as Integer) as Float

Returns a single-precision float representation of the argument.

## Exp(x as Float) as Float

Returns the "natural exponential" of X, that is, *ex.* This is the
inverse of the LOG function, so X=EXP(LOG(X)).

## Fix(x as Float) as Integer

Returns a truncated representation of the argument. All digits to the
right of the decimal point are simply chopped off, so the resultant
value is an integer. For non-negative X, FIX(X)=lNT(X). For negative
values of X, FIX(X)=INT(X)+1. For example, FIX(2.2) returns 2, and
FIX(-2.2) returns -2.

## Int(x as Float) as Integer

Returns an integer representation of the argument, using the largest
whole number that is not greater than the argument.. INT(2.5) returns 2;
INT(-2.5) returns -3; and INT(1000101.23) returns 10000101.

## Log(x as Float) as Float

Returns the natural logarithm of the argument, that
is, **log<sub>e</sub>(x)** or **ln(x).** This is the inverse of the EXP
function, so LOG(EXP(X)) = X. To find the logarithm of a number to
another base b, use the formula log<sub>b</sub>(X) = log<sub>e</sub>(X)
/ log<sub>e</sub>(b). For example, LOG(32767) / LOG(2) returns the
logarithm to base 2 of 32767.

## Rnd(range as Integer) as Integer

## Rnd(0) as Float

Generates a pseudo-random number using the current pseudo-random "seed
number" (generated internally and not accessible to user). RND may be
used to produce random numbers between 0 and 1, or random integers
greater than 0, depending on the argument.   
RND(0) returns a float value between 0 and 1.  
RND(integer) returns an integer between 1 and *integer* inclusive . For
example, RND(55) returns a pseudo-random integer greater than zero and
less than 56.

## Sgn(x as Float) as Integer

## Sgn(x as Integer) as Integer

The "sign" function: returns -1 for X negative, 0 for X zero, and +1 for
X positive.

## Sin(x as Float) as Float

Returns the sine of the argument (argument must be in radians). To
obtain the sine of X when X is in degrees, use SIN(X\*.01745329).

## Sqr(x as Float) as Float

Returns the square root of the argument. SQR(X) is the same as X ^
(1/2), only faster.

## Tan(x as Float) as Float

Returns the tangent of the argument (argument must be in radians). To
obtain the tangent of X when X is in degrees, use TAN(X\*.01745329). 
