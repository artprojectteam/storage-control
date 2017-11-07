# storage-control

localStorage & sessionStorage control library

![IE 9以上](https://img.shields.io/badge/IE-9+-green.svg)
![IE Edge 最新版](https://img.shields.io/badge/IE%20Egde-Latest-green.svg)
![Google Chrome 最新版](https://img.shields.io/badge/Google%20Chrome-Latest-green.svg)
![Mozilla Firefox 最新版](https://img.shields.io/badge/Mozilla%20Firefox-Latest-green.svg)
![Safari 最新版](https://img.shields.io/badge/Safari-Latest-green.svg)
![iOS 7以上](https://img.shields.io/badge/iOS-7+-green.svg)
![Android 4.4以上](https://img.shields.io/badge/Android-4.4+-green.svg)


## Usage

### html

```html
<script src="dist/storage-control.js"></script>
```

### npm

**Install to project** 

```bash
$ npm i -D storage-control
```

**Write to javascript files**

```js
import StorageControl from 'stroage-control'
```


## Document

### initialize

```js
const storage = new StorageControl('local')
```

| string | used |
| --- | --- |
| local | window.localStorage |
| session | window.sessionStorage |

'session'以外の値だったときはlocalStorageを使用。


### save(key, val)

データを`key-value`で記録。  
チェーンメソッド可能。

#### argument

| param | type | description |
| --- | --- | --- |
| key | string | キー名 |
| val | number \| string \| Array \| object | 登録したいデータ |

#### return

StorageControl Object

#### example

```js
// number
storage.save('num', 0)

// string
storage.save('str', 'foobar')

// array
storage.save('arr', [0, 'foo', 3])

// object
storage.save('obj', {foo: 'foo', bar: 1})

// チェーンメソッド
storage
  .save('num', 0)
  .save('str', 'foobar')
```


### get(key)

存在しない場合はNULL、存在する場合は保存した型(number | string | Array | object)で返却。

#### argument

| param | type | description |
| --- | --- | --- |
| key | string | キー名 |


#### return

NULL | number | string | Array | object

#### example

```js
const res = storage.get('str')
```

### remove(key)

キー名を指定してデータをキー名ごと削除。  
チェーンメソッド可能。  

#### argument

| param | type | description |
| --- | --- | --- |
| key | string | キー名 |


#### return

StorageControl Object

#### example

```js
storage.remove('str')

// チェーンメソッド
storage
  .remove('str')
  .remove('foobar')
```


### clear()

ストレージの中身をすべて削除。  

**\[WARNING\]** 自身で操作したデータ以外に、Chrome拡張機能などで自動的にデータが挿入されている場合、そのデータも削除されます。

#### example

```js
storage.clear()
```
