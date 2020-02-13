FROM mongo:4

LABEL maintainer="hupeng"

ENV TZ=Asia/Shanghai
VOLUME /data

RUN set -ex; \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime ;\
    echo $TZ > /etc/timezone

EXPOSE 9000
CMD /bin/bash /data/run.sh
