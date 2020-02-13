#!/bin/bash

mongod --bind_ip_all &

if [ ! -f "/data/db/do_not_delete" ]; then
	mongorestore -h localhost -d leanote --dir /data/leanote/mongodb_backup/leanote_install_data/
	echo "do not delete this file" >> /data/db/do_not_delete
	chmod 400 /data/db/do_not_delete
fi

echo `date "+%Y-%m-%d %H:%M:%S"`' >>>>>> start leanote service'
/data/leanote/bin/run.sh
