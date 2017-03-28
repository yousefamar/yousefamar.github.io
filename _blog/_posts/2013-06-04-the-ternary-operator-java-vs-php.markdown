---
layout: post
title: 'The Ternary Operator: Java vs PHP'
date: '2013-06-04 15:24:00'
---

Oftentimes when verbosity isn’t required, I like to chain ternary operations (inline ifs) together. The resulting code isn’t necessarily hard to read with a trained eye. It’s for the same reason that doing this:
<pre class="prettyprint">var x = y || 'default';</pre>
in JavaScript can save a lot of extra code and complexity. Ain’t nobody got time to check if a variable is undefined.

Here’s something that took me a while to realise was the source of a bug though.<!--more--><!-- more --> Would you say these two snippets of code do the same thing?

Java:
<pre class="prettyprint">public class Main {
    public static void main(String []args){
        boolean a = true;
        boolean b = false;
        int output = a?0:b?1:2;
        System.out.println(output);
    }
}
</pre>
PHP:
<pre class="prettyprint">&lt;?php   
    $a = true;
    $b = false;
    $output = $a?0:$b?1:2;
    echo $output;
?&gt;
</pre>
Nope. Java does the intuitive (like most other C-like languages) and outputs 0. PHP outputs 2. Why? <span>Java and PHP Order of Operations/Operator Precedence can’t tell us anything because we’re comparing which of the same thing comes first.</span>

It turns out ternary expressions are evaluated from left to right in PHP. In Java the expression is the same as “a?0:(b?1:2)”. To get the same behaviour in PHP, you would need the brackets. As it stands, the expression in PHP is the same as “(a?0:b)?1:2” where (unlike in strongly-typed Java) 0 is evaluated as false making the final result 2.

Here’s the same code again in C for good measure:
<pre class="prettyprint">#include &lt;stdio.h&gt;

int main() {
    int a = 1;
    int b = 0;
    int output = (a?0:b)?1:2;
    printf("%d", output);
    return 0;
}
</pre>
Yup, outputs a 2 as expected. Beware of these little inconsistencies across syntactically similar languages; you never know when it will cost you hours of debugging!