## insert
> * db.集合名.insert(文档对象)
> * db.集合名.insertOne(文档对象)
> * db.集合名.insertMany([文档对象,文档对象])

## -R read
> db.集合名.find(查询条件[,投影])
> * ab.students.find({age:18}) 查询年龄为18的所有信息
> * ab.students.find({age:18，name:'jack''}) 查询年龄为1且名字为jack的所有信息

#### 常用操作符
> <h5>1. <, <=, >, >=, !==  对应为：$lt,$lte,$gt,$gte,$ne
> 
> `举例：db.集合名.find({age:{$gte:20}}),年龄是大于等于20的`
> <h5>2. 逻辑或：使用$in 或 $or
>
> `查询年龄为18或20的学生`
> 
> `举例：db.集合名.find({age:{&in:[18,20]}})`
> 
> `举例：db.集合名.find({$or:[{age:18},{age:20}]})`    
> <h5>3.逻辑非：$nin
> <h5>4.正则匹配：
> 
> `举例：db.students.find({name:/^T})`
> <h5>5.$where能写函数：
> ```
>  db.students.find({where:function(){
>         return this.name === 'zhangsan' && this.age === 18
>  }})
> ```
> 
> <h5>PS: 投影：过滤掉不想要的数据，只保留想要展示的数据
>
>       举例：db.students.find({},{id:0,name:0}),过滤掉id和name
>       举例：db.students.find({},{age:1}),只保留age
> <h5>补充：db.集合名.findOne(查询条件[,投影])，默认只找到一个

## -U update:

> <h5>db.集合名.updata(查询条件,要更新的内容[,配置对象])
> ```
> //如下写法会将更新内容替换掉整个文档对象，但_id不受影响
>       举例：db.students.update({name:'Tom'},{age:19})
> 
> //使用$set修改指定内容，其他数据不变，不过只能匹配一个Tom
>       举例：db.students.update({name:'Tom'},{$set:{age:19}})
> 
> //修改多个文档对象，匹配多个Tom，把所有名为Tom的年龄都替换为19
>       举例：db.students.update({name:'Tom'},{$set:{age:19}},{multi:true})
> 
> 补充：db.集合名.updateOne(查询条件,要更新的内容[,配置对象])
>      db.集合名.updateMany(查询条件,要更新的内容[,配置对象])
> ```

## -D delete

> <h5>db.集合名.remove(查询条件)
> ```
> //删除所有年龄小于等于19的学生
>       举例：db.students.remove({age:{$lte:19}})
> ```
> 补充：deleteOne,deleteMany,没有delete方法（会报错）