'use strict';
module.exports = (sequelize, DataTypes) => {
    const BlogComment = sequelize.define('BlogComment', {
        QQAvatar: DataTypes.TEXT,
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        insertedAt: {
            type: DataTypes.DATE
        },
        link: DataTypes.TEXT,
        mail: DataTypes.TEXT,
        nick: DataTypes.TEXT,
        objectId: DataTypes.TEXT,
        ua: DataTypes.TEXT,
        updatedAt: DataTypes.DATE,
        url: DataTypes.TEXT,
        pid: DataTypes.TEXT,
        rid: DataTypes.TEXT
    }, {});
    BlogComment.associate = function (models) {
        // associations can be defined here
    };
    return BlogComment;
};
