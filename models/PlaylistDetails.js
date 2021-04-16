export default (sequelize, DataTypes) => {
  const PlaylistDetails = sequelize.define(
    'PlaylistDetails',
    {
      playlist_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      FK_song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      song_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      song_duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      FK_playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return PlaylistDetails;
};
