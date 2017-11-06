# storage-control
Web Storage Control (local or session)


## Document

### initialize

```javascript
const storage = new StorageControl('local')
```

| string | used |
| --- | --- |
| local | window.localStorage |
| session | window.sessionStorage |

'session'以外の値だったときはlocalStorageを使用。


### save(key, val)

チェーンメソッド可能

### get(key)

存在しない場合はNULL、存在する場合は保存した型(string|Array|object)で返却


### remove(key)

チェーンメソッド可能


### clear()

ストレージ内を削除
