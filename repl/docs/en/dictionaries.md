# Dictionaries in vint

Dictionaries in vint, also known as "kamusi," are powerful and flexible data structures that store key-value pairs. This page provides a comprehensive overview of dictionaries in vint, including how to create, access, modify, and iterate over them.

## Creating Dictionaries

Dictionaries are enclosed in curly braces {} and consist of keys and values separated by colons. Here's an example of defining a dictionary:

```s

dict = {"jina": "Juma", "umri": 25}
```

Keys can be strings, integers, floats, or booleans, while values can be any data type, including strings, integers, floats, booleans, null, or functions:

```s
k = {
    "jina": "Juma",
    "umri": 25,
    true: "true",
    "salimu": func(x) { print("habari", x) },
    "sina value": tupu
}
```

## Accessing Elements

Access individual elements in a dictionary using their keys:

```s

print(k[true]) // true
print(k["salimu"]("Juma")) // habari Juma
```

## Updating Elements

Update the value of an element by assigning a new value to its key:

```s
k['umri'] = 30
print(k['umri']) // 30
```

## Adding New Elements

Add a new key-value pair to a dictionary by assigning a value to a non-existent key:

```s
k["lugha"] = "Kiswahili"
print(k["lugha"]) // Kiswahili
```

## Concatenating Dictionaries

Combine two dictionaries using the + operator:

```s
matfunc = {"a": "apple", "b": "banana"}
mboga = {"c": "carrot", "d": "daikon"}
vyakula = matfunc + mboga
print(vyakula) // {"a": "apple", "b": "banana", "c": "carrot", "d": "daikon"}
```

## Checking If a Key Exists in a Dictionary

Use the in keyword to check if a key exists in a dictionary:

```s

"umri" in k // true
"urefu" in k // false
```

## Looping Over a Dictionary

Loop over a dictionary to access its keys and values:

```s

hobby = {"a": "asili", "b": "baiskeli", "c": "chakula"}
for i, v in hobby {
    print(i, "=>", v)
}
```
Output
```s
a => asili
b => baiskeli
c => chakula
```

Loop over just the values:

```s
for v in hobby {
    print(v)
}
```
Output
```s
asili
baiskeli
chakula
```

With this knowledge, you can now effectively use dictionaries in vint to store and manage key-value pairs, offering a flexible way to organize and access data in your programs.